/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { ADD_MEMO_REQUEST, DESTROY_MEMO_REQUEST } from 'reducers/memo';

const CustomToolbar = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destroyMemoDone, addMemoDone, memo } = useSelector(
    state => state.memo,
  );

  const handleCreate = () => {
    dispatch({
      type: ADD_MEMO_REQUEST,
      data: {
        title: ' ',
        content: ' ',
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: DESTROY_MEMO_REQUEST,
      id,
    });
  };

  useEffect(() => {
    if (destroyMemoDone) {
      navigate('/');
    }
  }, [destroyMemoDone]);

  useEffect(() => {
    if (addMemoDone) {
      navigate(`/${memo.id}`);
    }
  }, [addMemoDone]);

  return (
    <div id="toolbar">
      <button
        onClick={handleCreate}
        className="ql-insertHeart"
        style={{ marginRight: '14rem' }}
      >
        <HiOutlinePencilAlt size="24" />
      </button>
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
      <button
        className="ql-insertHeart"
        onClick={handleDelete}
        style={{ marginLeft: '2rem' }}
      >
        <RiDeleteBin6Line size="24" />
      </button>
    </div>
  );
};

export default CustomToolbar;
