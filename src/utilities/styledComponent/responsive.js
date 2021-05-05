import styled from 'styled-components';

export const Responsive = styled.div`
    @media (max-width:400px){
        .ant-layout-header{
            position:relative;
            height:215px;
            padding:0;

            .container-search{
                max-width:320px;
            }
        }
        .ant-layout-content{
            padding:0!important;

            .col-input{
                width:200px;
            }
            .ant-modal-body{
                height:unset!important;
            }
            .subject-list-item{
                width:100%;
            }
        }
        .playing-view{
                .ant-card-head{
                    padding:0;

                    .head-action-col{
                        width:33%;
                    }
                }
                .ant-card-body{
                    padding:0;

                    .title-position-question{
                        width:50%;
                        float:right;
                    }
                }
            }
    }
   
`;