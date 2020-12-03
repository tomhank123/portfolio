import { Section } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const Educationdiv: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <div>
        <Section.Title prefix='05. '>Education</Section.Title>
        <Section.Body>
          <div>
            <div>
              <p className='lead text-right' style={{ color: '#64ffda' }}>
                <FontAwesomeIcon icon={['fab', 'uncharted']} size='2x' />
                <FontAwesomeIcon icon={['fab', 'uncharted']} size='4x' />
                <br/>
                <FontAwesomeIcon icon={['fab', 'uncharted']} size='3x' />
              </p>
            </div>
            <div>
              <div>
                <h5>
                  Bachelor Degree <small style={{ color: '#64ffda'}}>@SaiGon University</small>
                </h5>
                <small className='text-dark'>May, 2014 — Present</small>
                <p>
                  Designed and developed user-friendly website, including optimized check-out page that increased user
                  clicks, and subsequently customer purchases by 20%.
                </p>
              </div>
            </div>
          </div>
        </Section.Body>
      </div>
    </Section>
  );
};

export default Educationdiv;
