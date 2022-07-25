import { message, Upload as AnUpload } from 'antd';
import { UPLOAD_FILE_URL } from 'api/admin';
import localStorage from 'utils/localStorage';

const { Dragger } = AnUpload;

const { idToken = '' } = localStorage.loadTokens();

const props = {
  name: 'file',
  action: UPLOAD_FILE_URL,
  headers: {
    'Content-Type': 'multipart/form-data',
    Authorization: idToken
  },
  // accept:
  // 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',

  onChange(info) {
    const { status, percent, url } = info.file;
    console.log('percent ', percent);

    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }

    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },

  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  }
};

const UploadFile = () => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon" />
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload. Strictly prohibit from uploading company data
        or other band files
      </p>
    </Dragger>
  );
};

export default UploadFile;
