import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = props => {
  const {
    component: Tag,
    className,
    children,
    display,
    justifyContent,
    flex,
    alignItems,
    alignContent,
    alignSelf,
    color,
    flexCenter,
    flexColumn,
    m,
    mt,
    mtsm,
    mr,
    mb,
    ml,
    mx,
    my,
    p,
    pt,
    pr,
    pb,
    pl,
    px,
    py,
    ...attributes
  } = props;

  const marginOrPadding = (props, suffix) => {
    if (props !== undefined) {
      return `${suffix}-${props}`;
    }
  };
  const arr = [
    {
      margin: {
        suffix: ['m', 'mt', 'mb', 'ml', 'mr', 'mx', 'my']
      }
    },
    {
      padding: {
        suffix: ['p', 'pt', 'pb', 'pl', 'pr', 'px', 'py']
      }
    }
  ];
  let b;
  const check = () => {
    arr.map((e, i) => {
      const el = Object.keys(e);
      if (el[0] === 'margin') {
        e.margin.suffix.map((element, i) => {
          b = `${element}`;
        });
      } else if (el[0] === 'padding') {
        console.log(e.padding.suffix);
      }
    });
  };
  check();
  const classes = classNames(
    display && `d-${display}`,
    justifyContent && `justify-content-${justifyContent}`,
    flex && `flex-${flex}`,
    alignItems && `align-items-${alignItems}`,
    alignContent && `align-content-${alignContent}`,
    alignSelf && `align-self-${alignSelf}`,
    color && `${color}-text`,
    marginOrPadding(m, 'm'),
    marginOrPadding(mt, 'mt'),
    marginOrPadding(mr, 'mr'),
    marginOrPadding(mb, 'mb'),
    marginOrPadding(ml, 'ml'),
    marginOrPadding(mx, 'mx'),
    marginOrPadding(my, 'my'),
    marginOrPadding(p, 'p'),
    marginOrPadding(pt, 'pt'),
    marginOrPadding(pr, 'pr'),
    marginOrPadding(pb, 'pb'),
    marginOrPadding(pl, 'pl'),
    marginOrPadding(px, 'px'),
    marginOrPadding(py, 'py'),
    className
  );
  const isEmptyClass = classes !== '' ? classes : null;

  return (
    <Tag {...attributes} className={isEmptyClass}>
      {children}
    </Tag>
  );
};

Box.defaultProps = {
  component: 'div'
};

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default Box;
export { Box as MDBBox };
