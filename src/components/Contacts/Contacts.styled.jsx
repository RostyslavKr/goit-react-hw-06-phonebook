import styled from '@emotion/styled';

export const WrapperContacts = styled.div``;

export const ItemContact = styled.li`
  display: flex;
  font-weight: 500;
  font-size: 20px;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  &:nth-of-type(even) {
    background-color: #f6f8fa;
  }
`;
export const DeleteButton = styled.button`
  display: flex;
  padding: 5px 10px;
  border-radius: 10px;
  border: none;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 15px;
  color: #fff;
  background: #e30613;
  &:hover,
  &:focus {
    background: #bd020d;
  }
`;
