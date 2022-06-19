import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import CustomToolbar from './CustomToolbar';
import 'pages/Modify/quill.snow.css';

const modules = {
  toolbar: {
    container: '#toolbar',
  },
};
const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'color',
];

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

const New = () => {
  return (
    <>
      <CustomToolbar />
      <ReactQuill theme="snow" modules={modules} formats={formats} readOnly />
    </>
  );
};

export default New;
