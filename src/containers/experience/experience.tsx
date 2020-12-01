import { Section } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const Experiencediv: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <div>
        <Section.Title prefix='04. '>Experiences</Section.Title>
        <Section.Body>
          <div>
            <div>
              <p className='lead text-right' style={{ color: '#64ffda' }}>
                <FontAwesomeIcon icon={['fab', 'uncharted']} size='2x' />
                <FontAwesomeIcon icon={['fab', 'uncharted']} size='4x' />
                <br />
                <FontAwesomeIcon icon={['fab', 'uncharted']} size='3x' />
              </p>
            </div>
            <div>
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index}>
                  <div>
                    <h5>
                      Web Developer <small style={{ color: '#64ffda' }}>@ DevBlock Viet Nam</small>
                    </h5>
                    <small className='text-muted'>May, 2014 — Present</small>
                    <p>
                      Designed and developed user-friendly website, including optimized check-out page that increased
                      user clicks, and subsequently customer purchases by 20%.
                    </p>
                  </div>
                  <hr />
                </div>
              ))}
            </div>
          </div>
        </Section.Body>
      </div>
    </Section>
  );
};

export default Experiencediv;
