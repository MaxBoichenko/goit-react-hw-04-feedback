import PropTypes from 'prop-types';

export const Section = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

Section.propTypes = {
  props: PropTypes.shape({
    title: PropTypes.string,
  }),
};
