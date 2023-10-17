import { render, screen, fireEvent } from '@testing-library/react';
import { FIELD_TYPE } from '../../../FormRenderer.constants';
import { FileInput, formatFileSize } from './FileInput';

describe('Components/FormRenderer/FileInput', () => {
  test('render FileInput component', () => {
    render(
      <FileInput
        name='field-file-input'
        type={FIELD_TYPE.FILE_UPLOAD}
        accept={['text/plain']}
        isUploading={false}
        onChange={jest.fn()}
      />,
    );

    const button = screen.queryByText('Drop a file');

    expect(button).toBeInTheDocument();
  });

  test('invalid types error message', () => {
    render(
      <FileInput
        name='field-file-input'
        type={FIELD_TYPE.FILE_UPLOAD}
        accept={['text/plain']}
        isUploading={false}
        onChange={jest.fn()}
      />,
    );

    const video = new File(['This is a video'], 'video.mp4', {
      type: 'video/mp4',
    });
    const dropArea = screen.getByRole('document');

    // Mock the DataTransfer module
    // as it is not available in jest
    const DataTransfer = jest.fn(() => ({
      files: [video],
    }));

    fireEvent.drop(dropArea, {
      dataTransfer: new DataTransfer(),
    });

    const helperText = screen.queryByText(
      'This field contains an invalid file type.',
    );

    expect(helperText).toBeInTheDocument();
  });

  test('file size limit exceeded', () => {
    render(
      <FileInput
        name='field-file-input'
        type={FIELD_TYPE.FILE_UPLOAD}
        sizeLimit={2048} // 2KB
        accept={['text/csv']}
        isUploading={false}
        onChange={jest.fn()}
      />,
    );

    const fileContent =
      'This has a long text to mock a large file of 2KB'.repeat(50);

    const csv = new File([fileContent], 'file.csv', {
      type: 'text/csv',
    });

    const fileInput = screen.getByAltText('Hidden File Input');

    fireEvent.change(fileInput, {
      target: {
        files: [csv],
      },
    });

    const limit = formatFileSize(2048);
    const actual = formatFileSize(csv.size);

    const helperText = screen.queryByText(
      `Attachment cannot be greater than ${limit}. (${actual})`,
    );
    expect(helperText).toBeInTheDocument();
  });

  test('drop zone hover effect', () => {
    render(
      <FileInput
        name='field-file-input'
        type={FIELD_TYPE.FILE_UPLOAD}
        accept={['text/plain']}
        isUploading={false}
        onChange={jest.fn()}
      />,
    );

    const dropArea = screen.getByRole('document');

    fireEvent.dragOver(dropArea, {
      preventDefault: jest.fn(),
    });

    // theme.palette.background.default = rgb(255, 255, 255)
    // Jest will convert any hex to rgb
    expect(dropArea.style.backgroundColor).toEqual('rgb(255, 255, 255)');

    fireEvent.dragLeave(dropArea, {
      preventDefault: jest.fn(),
      target: dropArea,
      relatedTarget: null,
    });

    expect(dropArea.style.backgroundColor).toBe('');
  });

  test('File has correct type and handles wildcards', () => {
    render(
      <FileInput
        name='field-file-input'
        type={FIELD_TYPE.FILE_UPLOAD}
        sizeLimit={2048} // 2KB
        accept={['image/bmp']}
        isUploading={false}
        onChange={jest.fn()}
      />,
    );

    const image = new File(['test'], 'test.bmp', {
      type: 'image/bmp',
    });

    const fileInput = screen.getByAltText('Hidden File Input');

    fireEvent.change(fileInput, {
      target: {
        files: [image],
      },
    });
    const fileAccepted = screen.getByText(image.name, { exact: false });
    expect(fileAccepted).toBeInTheDocument();
  });
});
