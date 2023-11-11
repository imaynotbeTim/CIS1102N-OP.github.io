import React from 'react'
import Card from './components/CardTemplate'

const mainList = [
  {
    id: 1,
    title: 'History of Computer Science Computing Disciplines',
    desc: '',
    subtopics:[]
  },
  {
    id: 2,
    title: '5 main computing disciples',
    desc: 'If you choose a computing major, what career options are open to you? We have provided information for each of the majors listed here:',
    subtopics: [
      {
        id: 1,
        title: 'Computer Engineering',
        desc: 'Typically involves software and hardware and the development of systems that involve software, hardware, and communications.'
      },
      {
        id: 2,
        title: 'Computer Science',
        desc: 'Currently the most popular of the computing disciplines; tends to be relatively broad and with an emphasis on the underlying science aspects.'
      },
      {
        id: 3,
        title: 'Information Systems',
        desc: 'Essentially, this is computing in an organizational context, typically in businesses.'
      },
      {
        id: 4,
        title: 'Information Technology',
        desc: 'Focuses on computing infrastructure and needs of individual users; tends to involve a study of systems (perhaps just software systems, but perhaps also systems in support of learning, of information dissemination, etc.).'
      },
      {
        id: 5,
        title: 'Software Engineering',
        desc: 'Focuses on large-scale software systems; employs certain ideas from the world of engineering in building reliable software systems.'
      },
    ]
  },
  {
    id: 3,
    title: 'Careers and Roles in Computing',
    desc: 'test',
    subtopics:[]
  },
];

const HistoryOfCS = () => {
  return (
    <>
      <Card topics={mainList[0]} />
      <Card topics={mainList[1]} />
      <Card topics={mainList[2]} />
    </>
  )
}

export default HistoryOfCS