import React from "react";
import { useState } from "react";
import "./styles/LessonList.css";

const LessonList = (props) => {
  const [chapterState, setChapter] = useState(undefined)
  const [lessonActive, setLesson] = useState(undefined)
  const [userLesson, setUserLesson] = useState(tem(props))
  function tem({viewed}){
    let tem =  viewed
    tem = tem.filter(e => e.viewed !== false)
    tem = tem.map(e => e.lesson_id)
    return tem
  }
  function toogleViewed(lesson){
    let copy = userLesson.filter(word => word !== lesson)
    if(userLesson.includes(lesson)){
      setUserLesson(copy)
      props.viewedHandler(lesson, false)
    }
    else if(!(userLesson.includes(lesson))){
      copy.unshift(lesson)
      setUserLesson(copy)
      props.viewedHandler(lesson, true)
    }
    else{
      console.error('Unable to Commit Lesson Viewed')
    }
  }

  return (
    <ul className="component-container" id="LessonList">
      {props.chapters.map((chapter) => {
        return (
          <li className="chapter" id={chapter.name} key={chapter.id}>
            <div className="chapter-container">
              <div
                role="button"
                className="chapter-button"
                onClick={() => {
                  if (chapterState === chapter.name) {
                    setChapter(undefined);
                  } else {
                    setChapter(chapter.name);
                  }
                }}
              >
                <h2 className={chapter.lessons.some(lesson => lesson.id === lessonActive)? "chapter-text chapter-active": "chapter-text"}>{chapter.name}</h2>
                <div className="progress-dot">
                  <div
                    className={
                      chapter.lessons.some(lesson => userLesson.includes(lesson.id) )
                        ? "progress-ball active-ball"
                        : "progress-ball inactive-ball"
                    }
                  >
                    <div className="progress-mini-ball"></div>
                  </div>
                </div>
              </div>
            </div>
            <ul
              className={
                chapterState === chapter.name
                  ? "lesson-container"
                  : " hidden"
              }
            >
              {chapter.lessons
                ? chapter.lessons.map((lesson) => {
                    return (
                      <li className="lesson" id={lesson.id} key={lesson.id}>
                        <button
                          onClick={() => {
                            setLesson(lesson.id);
                            props.videoChanger(lesson.link);
                          }}
                          className="lesson-link"
                        >
                          <h4 className={lessonActive === lesson.id? "lesson-text lesson-active": "lesson-text"}>{lesson.name}</h4>
                        </button>
                        <div className="progress-dot">
                          <button onClick={() => toogleViewed(lesson.id)}
                            className={
                              userLesson.includes(lesson.id)
                                ? "progress-ball active-ball"
                                : "progress-ball inactive-ball"
                            }
                          >
                            <div className="progress-mini-ball"></div>
                          </button>
                        </div>
                      </li>
                    );
                  })
                : console.error(`${chapter.name} Lección no encontrada`)}
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default LessonList;
