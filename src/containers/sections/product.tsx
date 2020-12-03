import { Project, Section } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const Productdiv: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <div>
        <Section.Body>
          <div>
            <div>
              <Project>
                <Project.Header>
                  <FontAwesomeIcon icon={['fas', 'external-link-alt']} size='lg' />
                </Project.Header>
                <Project.Body>
                  <Project.Title>IMDb Clone</Project.Title>
                  <Project.Text>
                    Embeddable web player widget for Apple Music that lets users log in and listen to full song playback
                    in the browser leveraging MusicKit.js. Read more about this project on 9to5Mac.
                  </Project.Text>
                </Project.Body>
                <Project.Footer>
                  <ul className='list-inline'>
                    <li className='list-inline-item'>React JS</li>
                    <li className='list-inline-item'>Hooks</li>
                    <li className='list-inline-item'>Typescript</li>
                  </ul>
                </Project.Footer>
              </Project>
            </div>
            <div>
              <div>
                <div className='p-0'>
                  <img
                    src='https://i.ytimg.com/vi/rm9kPoYhylw/maxresdefault.jpg'
                    alt='my-product'
                    className='mw-100 rounded'
                  />
                </div>
              </div>
            </div>
          </div>
        </Section.Body>
      </div>
    </Section>
  );
};

export default Productdiv;
