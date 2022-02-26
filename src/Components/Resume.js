import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const achievements = this.props.data.achievements.map(function (
      achievements
    ) {
      return (
        <div key={achievements.name}>
          <h3>{achievements.name}</h3>
          <p className="info">
            {achievements.info} <span>&bull;</span>
            <em className="date">{achievements.year}</em>
          </p>
          <p>{achievements.description}</p>
        </div>
      );
    });

    const coCurricular = this.props.data.coCurricular.map(function (
      coCurricular
    ) {
      return (
        <div key={coCurricular.name}>
          <h3>{coCurricular.name}</h3>
          <p className="info">
            <em className="date">{coCurricular.year}</em>
          </p>
          <p>{coCurricular.description}</p>
        </div>
      );
    });

    const extraCurricular = this.props.data.extraCurricular.map(function (
      extraCurricular
    ) {
      return (
        <div key={extraCurricular.name}>
          <h3>{extraCurricular.name}</h3>
          <p className="info">
            <em className="date">{extraCurricular.year}</em>
          </p>
          <p>{extraCurricular.description}</p>
        </div>
      );
    });

    const reference = this.props.data.reference.map(function (reference) {
      return (
        <div key={reference.name}>
          <h3>{reference.name}</h3>
          <p className="info">{reference.designition}</p>
          <p>{reference.email}</p>
          <p>{reference.phone}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    const languages = this.props.data.languages.map((languages) => {
      return (
        <li key={languages.name}>
          <em>{languages.name}</em>
        </li>
      );
    });

    const interests = this.props.data.interests.map((interests) => {
      return (
        <li key={interests.name}>
          <em>{interests.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work Experience</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Achievements</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{achievements}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Co-curricular</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{coCurricular}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Extra-curricular</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{extraCurricular}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>languages</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <ul className="skills">{languages}</ul>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Interests</span>
              </h1>
            </div>
            <div className="nine columns main-col">
              <ul className="skills">{interests}</ul>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Reference</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{reference}</div>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
