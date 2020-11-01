import * as React from 'react';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';

const svgIcons = {

}


const Container: StyledComponent<'div', DefaultTheme, Attr, never> = styled.div`
  width: ${(props: any) => `var(--icon__${props.size});`};
  height: ${(props: any) => `var(--icon__${props.size});`};
  ${(props: any) => props.align === 'center' ? `margin: 0 auto;` : props.align === 'right' ? 'margin-left: auto' : ''};
  ${(props: any) => Boolean(props.onClick) && `cursor: pointer;`};

  svg {
    polygon, path, polyline, rect, line, circle {
      ${(props: any) => props.stroke ? `stroke: var(--color__${props.stroke});` : `stroke: none;`};
      ${(props: any) => props.fill ? `fill: var(--color__${props.fill});` : `fill: none;`};
      ${(props: any) => props.strokeWidth ? `stroke-width: ${props.strokeWidth}` : `stroke-width: 2`};
      stroke-linecap: round;
      stroke-linejoin: round;
      stroke-miterlimit: 10;
      vector-effect: non-scaling-stroke;
    }
  }
`;

interface Attr {
  className?: string;
  style?: object;
  size?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  align?: 'center' | 'left' | 'right';
  onClick?: (e: any) => void;
}

export type SvgIcons = keyof typeof svgIcons;

export interface Props extends Attr {
  as: SvgIcons;
}

const Icon: React.FC<Props> = ({ className, style, as, size = 'small', fill, stroke, strokeWidth, align, onClick }) => {

  return (
    <Container onClick={onClick} className={className} style={style} size={size} fill={fill} stroke={stroke} strokeWidth={strokeWidth} align={align} >
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 24 24">
        {svgIcons[as]}
      </svg>
    </Container>
  )
}

export default Icon;
