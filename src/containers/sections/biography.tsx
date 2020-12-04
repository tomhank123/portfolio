import avatarJPG from '@/assets/images/avatar.jpg';
import { Biography } from '@/components';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const BiographyContainer: FC<IProps> = (props: IProps) => {
  const skills = ['JavaScript (ES6+)', 'HTML & (S)CSS', 'ReactJS', 'Vue JS', 'Node.js', 'React Native', 'Typescript'];

  return (
    <Biography id='about'>
      <Biography.Heading>About Me</Biography.Heading>
      <Biography.Inner>
        <Biography.Text>
          <div>
            <p>Hello! I'm Duc, a software engineer based in Ho Chi Minh, VN.</p>

            <p>
              I enjoy creating things that live on the internet, whether that be websites, applications, or anything in
              between. My goal is to always build products that provide pixel-perfect, performant experiences.
            </p>

            <p>
              Shortly after graduating from{' '}
              <a href='https://sgu.edu.vn/' target='_blank' rel='noopener noreferrer'>
                Sai Gon University
              </a>
              , I joined the engineering team at <a href='https://www.upstatement.com'>Upstatement</a> where I work on a
              wide variety of interesting and meaningful projects on a daily basis.
            </p>

            <p>Here are a few technologies I've been working with recently:</p>
          </div>

          <ul className='skills-list'>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
        </Biography.Text>
        <Biography.Pic>
          <div className='wrapper'>
            <img src={avatarJPG} alt='Avatar' className='img' />
          </div>
        </Biography.Pic>
      </Biography.Inner>
    </Biography>
  );
};

export default BiographyContainer;
