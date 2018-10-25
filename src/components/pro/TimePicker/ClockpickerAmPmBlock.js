import React from 'react';
import classNames from 'classnames';

const ClockpickerAmPmBlock = ({ changeDayTime, dayTime }) => {
  const classesAM = classNames(
    'btn-floating', 'btn-flat', 'clockpicker-button', 'am-button',
    dayTime === 'am' && 'active'
  );

  const classesPM = classNames(
    'btn-floating', 'btn-flat', 'clockpicker-button', 'am-button',
    dayTime === 'pm' && 'active'
  );

  return (
    <div className="clockpicker-am-pm-block">
      <button type="button" className={classesAM} onClick={() => changeDayTime('am')}>AM</button>
      <button type="button" className={classesPM} onClick={() => changeDayTime('pm')}>PM</button>
    </div>
  );
}

export default ClockpickerAmPmBlock;

// const ClockpickerAmPmBlock = {
//   data() {
//     return {
//       dayTime: 'am'
//     };
//   },
//   methods: {
//     const changeDayTime = (time) {
//       this.dayTime = time;
//       this.$emit('dayTime', this.dayTime);
//     }
//   }
// };