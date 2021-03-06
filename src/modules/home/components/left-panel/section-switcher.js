import React, { Component } from 'react';
import { connect } from '98k';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

const Switch = styled.div`
  writing-mode: vertical-lr;
  padding: 1rem 0.3rem 1rem .1rem;
  width: 1.7rem;
  border: 1px solid #888;
  border-left: none;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  cursor: pointer;
  opacity: 0.3;
  background-color: #fff;
  ${p => p.active && css`
    opacity: 1;
    background-color: #ccc;
  `}
`;

class SectionSwitcher extends Component {
  render() {
    const {
      sections, sectionId,
    } = this.props;

    return (
      <Container>
        {Object.keys(sections).map(key => {
          const { id, label } = sections[key];
          return (
            <Switch
              key={id}
              active={sectionId === id}
              onClick={this.setSection.bind(this, id)}
            >
              {label}
            </Switch>
          );
        })}
        <div onClick={this.showPopUp} style={{ marginTop: '10px', boxShadow: 'rgb(191, 242, 230) 0px 0.2rem 0.5rem', transition: 'backgroundColor 0.2s', padding: '0px 6px', color: 'rgb(255, 255, 255)', backgroundColor: 'rgb(31, 205, 163', fontSize: '24px', borderRadius: '50%', border: '4px solid rgb(31,205,163)' }}>?</div>
      </Container>
    );
  }

  setSection = id => {
    this.props.dispatch({ type: 'home/switchSection', payload: id });
  }

  showPopUp = () => {
    this.props.dispatch({ type: 'home/savePopUpActive', payload: true });
  }
}

export default connect(({ home: { sections, sectionId } }) => ({
  sections, sectionId,
}))(SectionSwitcher);
