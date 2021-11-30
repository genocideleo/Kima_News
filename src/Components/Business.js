import React from 'react';
import Topbar from './Topbar';
import useStyles from './styles';

function Business() {
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <div className={classes.main}>
        <span style={{ fontSize: '28px' }}>
          {' '}
          North-East India 3F Oil Palm set to expand its operations{' '}
        </span>
        <div className={classes.ima1}></div>
        <div style={{ margin: '40px', fontSize: '24px' }}>
          3F Oil Palm is set to expand its operations in the North-East part of
          the country under the National Mission on Edible Oils - Oil Palm
          (NPEO-OP). The company will invest Rs 1,750 Crores in Oil Palm
          cultivation across Assam and Arunachal Pradesh. The company is
          planning to increase its Oil Palm area under cultivation by around 31
          times 62,000 hectares in Arunachal Pradesh and Assam in the next 5
          years. The company announced that it will commission a processing unit
          in Arunachal Pradesh and create employment for around 5,000 people in
          the North-East region. The company stated it would be increasing its
          cultivated area in Arunachal Pradesh from the current 2,000 hectares
          to an additional 30,000 hectares. It would also invest up to Rs 750
          Crores and create employment for 3,000 people in the next five years
          by enhancing the cultivated land. In addition, 3F Oil Palm also plans
          to commission an Oil Palm Processing unit in the state by the
          financial year 2022-23. In another state in the North-East, Assam
          would also attract up to Rs 1,000 Crores from the company through
          adding 30,000 hectares of cultivated land along with employment for
          2,000 people. .. The investments will be made in developing an
          integrated Oil Palm project comprising nursery operations, area
          expansion, crop maintenance, fresh fruit bunches (FFB) harvesting and
          collection, Oil Palm processing and refining, power plant, and
          ancillary farmer services. The company stated it has expressed
          interest to operate in Tinsukia, Dibrugarh, Dhemaji, Jorhat, Golaghat.
          In Arunachal Pradesh the company is operating in Lower Dibang valley
          and plans to expand in Namsai, Tirap and Changlang While sharing
          details of the company’s growth plan, Sanjay Goenka, Managing Director
          and CEO of 3F Oil Palm said, “NEOP-OP is a visionary step from the
          Government of India towards the cause of Atmanirbharta. The policy has
          encouraged us to expand and propel our growth engines. We are geared
          up to make strategic investments and expand operations to more states
          that offer immense potential in Oil Palm cultivation to maintain a
          leadership position in the Oil Palm industry in the country. The
          increase in Oil Palm cultivation in the country will assist in
          bringing down the import load on the economy totalling Rs 70,000
          Crores of foreign currency with North-East playing a significant
          role.”
        </div>
      </div>
    </>
  );
}

export default Business;
