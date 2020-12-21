import avatarJPG from '@/assets/images/avatar.jpg';
import { Biography } from '@/components';
import * as React from 'react';
import { FC } from 'react';

interface IProps {}

const BiographyContainer: FC<IProps> = (props: IProps) => {
  const skills = ['JavaScript (ES6+)', 'Typescript', 'ReactJS', 'Vue JS', 'HTML & (S)CSS', 'Node.js', 'React Native'];

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
              <a href='https://sgu.edu.vn/' target='_blank' rel='nofollow noopener noreferrer'>
                Sai Gon University
              </a>
              , I joined the engineering team at <a href='https://imad.com.vn/' target='_blank' rel='nofollow noopener noreferrer'>IMAD Technology</a> where I work on a
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
