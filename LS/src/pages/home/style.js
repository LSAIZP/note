import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;        
`;

export const HomeRight= styled.div`
  width: 280px;
  float: right;
  margin-top:30px;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border:1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    margin-right: 10px;
    width: 32px;
    height: 32px;
  }
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 150px;
    height: 100px;
    float: right;
    border-radius: 4px;
  }
`;

export const ListInfo = styled.div`
  width: 458px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 14px;
    color: #999;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const RecWrapper = styled.div`
  height:224px; 
  margin-top: -4px;
  padding-bottom: 4px;
  .img{
    height: 50px;
    margin-bottom: 6px;
    border-radius: 4px;
  }
`;

export const LoadWrapper = styled.div`
  height: 60px;
  border: 1px solid #f0f0f0;
  margin-top:7px;
  margin-bottom: 30px;
  padding: 10px 22px;
  border-radius: 6px;
  background: #fff;
  .img{
    width: 60px;
    height: 60px;
    float: left;
  }
  .info{
    width: 143px;
    height: 43px;
    float: left;
    margin-left: 7px;
    margin-top:10px;
  }
  .title{
    width: 143px;
    height: 21px;
    font-size: 15px;
    color: #333;
  }
  .description{
    width: 143px;
    height: 18px;
    margin: 4px 0 0;
    color: #999;
    font-size: 13px;
  }
`;

export const WriterWrapper = styled.div`
  .info{
    width: 280px;
    height: 19px;
    .pic{
      font-size: 14px;
      color: #969696;
    }
    margin-bottom: 15px;
  }
  .li{
    height: 48px;
    margin-bottom: 15px;
  }
  .img{
    width: 48px;
    height: 48px;
    border:1px solid #ddd;
    border-radius: 50%;
    float: left;
  }
  .desc{
    float: left;
    margin-top: 8px;
    margin-left: 10px;
    .name{
      font-size:14px;
      margin-bottom:7px;
      color: #333;
    }
    .title{
      font-size: 12px;
      color: #969696;
    }
  }
  .find{
    width: 259px;
    height: 19px;
    font-size: 13px;
    color: #787878;
    border-radius: 4px;
    background-color: #f7f7f7;
    padding: 7px 7px 7px 12px;
    border: 1px solid #dcdcdc;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;
  }
`;

export const  A = styled.a`
  display: block;
  float: right;
  font-size: 13px;
  color: #42C02E;
  margin-top: 5px;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 13px;
  cursor: pointer;
  border: 1px solid #ddd;
` 