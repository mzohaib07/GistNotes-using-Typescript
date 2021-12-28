import React from 'react'
import { Col } from 'antd';
import {Grid,Footer, Span1 , ProfilePic , Profile , ProfileFooter} from './style';


const PrivateGistsGrid = ({privateGistsDisplay , showUniqueGistRecord , privateFiles} : any) => {

    const dispPrivateFiles = 
    privateFiles &&
      privateFiles?.map((content : any, index : number) => {
        return (
          <span key={index}>
            <p>
              <Span1>{++index}</Span1> {content}{" "}
            </p>
          </span>
        );
      });
  
    return (
        <>
          {privateGistsDisplay.map((gist : any, index : number) => (
            <Col xs={{ span: 12, offset: 1 }} lg={{ span: 6, offset: 1 }}  key={index}>
              <Grid
                key={index}
                onClick={() => showUniqueGistRecord(gist?.id)}
              >
                <div>
                {dispPrivateFiles}
                </div>
                <Footer>
                  <div>
                    <ProfilePic src={gist?.owner?.avatar_url} alt="profile" />
                  </div>
                  <Profile>
                    <ProfileFooter>
                      <h4>
                        {gist?.owner?.login} / {Object.keys(gist.files)[0]}{" "}
                      </h4>
                      <span>{gist?.created_at}</span>
                      <br />
                    </ProfileFooter>
                  </Profile>
                </Footer>
              </Grid>
              </Col>
            ))}  
        </>
    )
}

export default PrivateGistsGrid
