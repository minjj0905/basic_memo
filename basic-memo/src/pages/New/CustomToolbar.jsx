/* eslint-disable react/button-has-type */
/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import { ADD_MEMO_REQUEST } from 'reducers/memo';

const CustomToolbar = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { destroyMemoDone, addMemoDone, memo, memoList } = useSelector(
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

  useEffect(() => {
    if (destroyMemoDone) {
      const filtered = memoList.filter(m => m.id != id);
      console.log(filtered);
      navigate(`/${filtered[0].id}`);
    }
  }, [destroyMemoDone]);

  useEffect(() => {
    if (addMemoDone) {
      navigate(`/${memo?.id}`);
    }
  }, [addMemoDone]);

  return (
    <div id="toolbar">
      <button
        onClick={handleCreate}
        className="ql-insertHeart"
        style={{ width: '140px', display: 'flex', alignItems: 'center' }}
      >
        <HiOutlinePencilAlt size="24" />
        <div style={{ fontFamily: 'Pr-Bold', fontSize: '1rem' }}>
          새 글 작성하기
        </div>
      </button>
    </div>
  );
};

export default CustomToolbar;
