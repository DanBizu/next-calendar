import React from 'react'

type Props = {
  className: string;
};

const Social = (props: Props) => {
  const { className } = props;

  return (
    <div className={"social".concat((className ? ` ${className}` : ""))}>Social</div>
  )
}

export default Social