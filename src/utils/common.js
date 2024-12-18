import moment from "moment";
import { DATE_FORMAT } from "../constants/constants";
import { useSpring, animated } from '@react-spring/web'


export const formatDate = (date, format = DATE_FORMAT) => {
  return moment(date).format(format);
};

export const formatNumber = (num) => {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}`;
  }
  return num;
};

export const fadeIn = (diRection, delay) => {
  return {
    hidden: {
      y: diRection === "up" ? 100 : diRection === "down" ? -100 : 0,
      x: diRection === "left" ? 100 : diRection === "right" ? -100 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};



export const NumberAnimatd = ({ values }) => {
  const { number } = useSpring({
      from: { number: 0 },
      number: values,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 }
  })
  return (
      <animated.div>
          {number.to((value) => `${value.toFixed(0)}K+`)}
      </animated.div>
  )

}