import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ReactQuill, { Quill } from 'react-quill';
import './quill.snow.css';
import styled from 'styled-components';
import useInput from 'hooks/useInput';
import { LOAD_MEMO_REQUEST } from 'reducers/memo';
import CustomToolbar from './CustomToolbar';

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

const TitleInput = styled.input`
  font-family: Pr-Bold;
  font-size: 1.3rem;
  margin: 0.5rem 0 0 0.85rem;
`;

const Modify = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [title, onChangeTitle, setTitle] = useInput('');
  const { memo, loadMemoDone } = useSelector(state => state.memo);

  useEffect(() => {
    dispatch({
      type: LOAD_MEMO_REQUEST,
      id,
    });
  }, [id]);

  useEffect(() => {
    if (loadMemoDone) {
      setContent(memo.content);
      setTitle(memo.title);
    }
  }, [loadMemoDone]);

  return (
    <>
      <CustomToolbar id={id} />
      <TitleInput
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChangeTitle}
      />
      <ReactQuill
        theme="snow"
        placeholder="내용을 입력하세요"
        modules={modules}
        formats={formats}
        value={content}
        onChange={setContent}
      />
    </>
  );
};

export default Modify;
