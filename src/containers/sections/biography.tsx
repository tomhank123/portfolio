import { Avatar, Section, Button } from '@/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { FC } from 'react';
import avatarJPG from '@/assets/images/avatar.jpg';

interface IProps {}

const BiographyContainer: FC<IProps> = (props: IProps) => {
  return (
    <Section>
      <div>
        <Section.Title prefix={'01. '}>About Me</Section.Title>
        <Section>
          <div>
            <div>
              <p>Hello! I'm Duc, a software engineer based in Ho Chi Minh, VN.</p>
              <p>
                I enjoy creating things that live on the internet, whether that be websites, applications, or anything
                in between. My goal is to always build products that provide pixel-perfect, performant experiences.
              </p>
              <p>
                Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement
                where I work on a wide variety of interesting and meaningful projects on a daily basis.
              </p>
            </div>
            <div>
              <Avatar>
                <Avatar.Image src={avatarJPG} alt='avatar' />
                <Avatar.Title>Duc Tran.</Avatar.Title>
                <Avatar.Subtitle>Front-End Engineer</Avatar.Subtitle>
              </Avatar>
              <div className='text-center'>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'facebook-f']} size='1x' />
                </Button>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'github']} size='1x' />
                </Button>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'codepen']} size='1x' />
                </Button>
                <Button
                  className='rounded-circle'
                  style={{ width: 40, height: 40, margin: '0 0.25rem' }}
                >
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size='1x' />
                </Button>
              </div>
            </div>
            <div className='d-none'>
              <dl className='row'>
                <dt className='col-sm-2'>
                  <FontAwesomeIcon icon={['fas', 'phone-square']} size='1x' />
                </dt>
                <dd className='col-sm-10'>(+84) 795825129</dd>

                <dt className='col-sm-2'>
                  <FontAwesomeIcon icon={['fas', 'envelope-open-text']} size='1x' />
                </dt>
                <dd className='col-sm-10'>minhduc.tran.sgu@gmail.com</dd>

                <dt className='col-sm-2'>
                  <FontAwesomeIcon icon={['fab', 'skype']} size='1x' />
                </dt>
                <dd className='col-sm-10'>minhduc.tran.sgu</dd>

                <dt className='col-sm-2 text-truncate'>
                  <FontAwesomeIcon icon={['fas', 'map-marked-alt']} size='1x' />
                </dt>
                <dd className='col-sm-10'>Go Xoai, Binh Tan, HCMC</dd>
              </dl>
              <h3>Interesting</h3>
              <div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'walking']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'code']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'plane-departure']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'headphones']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'dumbbell']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'microphone-alt']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'swimmer']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
                <div className='mb-3'>
                  <div className='h-100 text-light text-center border-0'>
                    <div>
                      <FontAwesomeIcon icon={['fas', 'cheese']} className='text-dark' size='2x' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </Section>
  );
};

export default BiographyContainer;
