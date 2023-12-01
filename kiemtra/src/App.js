import logo from './logo.svg';
import './App.css';
import React from 'react';
import Student from './ducanhpham/Student';

const studentData = [
  {
    id: 1,
    name: 'Tai Voi',
    image: 'https://scontent.fhan3-3.fna.fbcdn.net/v/t39.30808-6/358079118_829939441881234_4873732385937443928_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=8UXlwfHqVwoAX_q7wG7&_nc_ht=scontent.fhan3-3.fna&oh=00_AfCjQNI0VQa1p4G4l2vEDL8u0eedD-QQK-CHkcz5siWFsw&oe=656DEC1B',
    email: 'ducanhpham@gmail.com',
  },

  {
    id: 2,
    name: 'Depzai',
    image: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/352669182_966390607840573_7288728760687595453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=dv7oB3GXBy8AX_4McAl&_nc_ht=scontent.fhan4-1.fna&oh=00_AfBH4Bc6eYIq-u8U5PcOx_-QO6xSYXcdJRzD2MFOf1VQ9g&oe=656D4B50',
    email: 'ducanhpham@gmail.com',
  },

  {
    id: 3,
    name: 'Voi',
    image: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/352669182_966390607840573_7288728760687595453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=dv7oB3GXBy8AX_4McAl&_nc_ht=scontent.fhan4-1.fna&oh=00_AfBH4Bc6eYIq-u8U5PcOx_-QO6xSYXcdJRzD2MFOf1VQ9g&oe=656D4B50',
    email: 'ducanhpham@gmail.com',
  },

  {
    id: 4,
    name: 'Beo',
    image: 'https://scontent.fhan4-1.fna.fbcdn.net/v/t39.30808-6/352669182_966390607840573_7288728760687595453_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=dv7oB3GXBy8AX_4McAl&_nc_ht=scontent.fhan4-1.fna&oh=00_AfBH4Bc6eYIq-u8U5PcOx_-QO6xSYXcdJRzD2MFOf1VQ9g&oe=656D4B50',
    email: 'ducanhpham@gmail.com',
  },
];


const App = () => {
  return (
    <div>
      <h1>Danh sách Sinh viên</h1>
      {studentData.map((student) => (
        <Student key={student.id} {...student} />
      ))}
    </div>
  );
};

export default App;