/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { Link } from 'react-router-dom';
import ReactQuill, { Quill } from 'react-quill';
import './quill.snow.css';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import useInput from 'hooks/useInput';

const CustomToolbar = () => (
  <div id="toolbar">
    <Link to="/new">
      <button className="ql-insertHeart" style={{ marginRight: '5rem' }}>
        <HiOutlinePencilAlt size="24" />
      </button>
    </Link>
    <select
      className="ql-header"
      style={{ marginRight: '1rem' }}
      defaultValue=""
      onChange={e => e.persist()}
    >
      <option value="1" />
      <option value="2" />
      <option selected />
    </select>
    <button className="ql-bold" />
    <button className="ql-italic" />
    <button className="ql-underline" style={{ marginRight: '1rem' }} />
    <select className="ql-color" />
    <button className="ql-list" value="ordered" />
    <button className="ql-list" value="bullet" />
  </div>
);

const Size = Quill.import('formats/size');
Size.whitelist = ['extra-small', 'small', 'medium', 'large'];
Quill.register(Size, true);

const Modify = () => {
  const { value, setValue } = useInput('');
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

  return (
    <>
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        placeholder="..."
        value={value}
        modules={modules}
        formats={formats}
        onChange={setValue}
      />
    </>
  );
};

export default Modify;
