import React from 'react';
import Topbar from './Topbar';
import useStyles from './styles';

function Inter() {
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <div className={classes.main}>
        <span style={{ fontSize: '28px' }}>
          {' '}
          More Than 10,000 Australians Want Compensation For Vaccine Side
          Effects{' '}
        </span>
        <div className={classes.ima3}></div>
        <div style={{ margin: '40px', fontSize: '24px' }}>
          Australia's government may face a more than A$50 million ($37 million)
          bill related to its Covid-19 vaccination program, as thousands of
          people register for compensation for health issues related to their
          inoculations, the Sydney Morning Herald reported. More than 10,000
          people have registered for a government program to be compensated for
          lost income after being hospitalized for rare but significant side
          effects from the jab, the paper reported, citing official data.
          Compensation starts from A$5,000, meaning the program would cost at
          least A$50 million should each claim be approved. Australia's
          Therapeutic Goods Administration has received almost 79,000 reports of
          adverse side effect from 36.8 million doses of vaccine, according to
          its website. The most frequent reported side effects include a sore
          arm, headache, fever and chills. The TGA has received 288 reports
          assessed as likely to be heart inflammation linked to the Pfizer Inc.
          vaccine, as well as 160 of rare clotting disorder thrombosis with
          thrombocytopenia syndrome (TTS) linked to the AstraZeneca Plc vaccine.
          Nine deaths have been linked to the immunization program, the
          overwhelming majority of whom were aged 65 years and older, according
          to the TGA. Following an early setback, Australia ramped-up its
          vaccination push in the second half of the year as the delta variant
          plunged its two largest cities Sydney and Melbourne into a months-long
          lockdown. Restrictions have gradually eased in recent weeks as
          inoculation rates have surged.
        </div>
      </div>
    </>
  );
}

export default Inter;
