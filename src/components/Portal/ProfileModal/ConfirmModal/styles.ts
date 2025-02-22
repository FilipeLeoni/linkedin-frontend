import styled from 'styled-components';

export const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    position: fixed;
    background: #FDFFFC;

    border: 2px solid ${({theme}) => theme.colors.primaryDark};
    border-radius: 10px;

    img {
        width: 30%;
    }

    .modal--texts {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 24px 24px 24px;
    }
`;

export const ModalText = styled.p`
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    padding: 0 0 16px 0;

    color: ${({theme}) => theme.colors.mutedDarker};
`;

export const ModalTitle = styled.h2`
    font-family: 'Radio Canada';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    padding: 0 0 16px 0;
    color: ${({theme}) => theme.colors.primaryDark};
`;

export const CloseModal = styled.div`
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
    padding-left: 150px;
`;

export const ModalCloseButton = styled.button`
    width: 45px;
    height: 45px;
    background-color: #fff;
    color: ${({theme}) => theme.colors.primaryDark};
    font-weight: bold;
    border-radius: 8px;
    &:hover {
        background-color: red;
        border: 1px solid;
        color: #fff;
    }`
;