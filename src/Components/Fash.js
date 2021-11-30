import React from 'react';
import Topbar from './Topbar';
import useStyles from './styles';

function Fash() {
  const classes = useStyles();
  return (
    <>
      <Topbar />
      <div className={classes.main}>
        <span style={{ fontSize: '28px' }}>
          {' '}
          Online Retailor Shein Violating Labour Laws{' '}
        </span>
        <div className={classes.ima2}></div>
        <div style={{ margin: '40px', fontSize: '24px' }}>
          On Friday, Public Eye, a Swiss watchdog group, released a detailed
          report that accuses the rising fast-fashion giant of violating Chinese
          labour laws. The group hired independent Chinese researchers to track
          Shein’s manufacturing and packing process in China and Europe. In
          Guangzhou, the city where Shein is headquartered and where many of its
          suppliers are located, researchers were able to track down 17 Shein
          partners. They found some manufacturers were informal factories set up
          in residential buildings. Some also had barred windows and no
          emergency exits, according to Public Eye; conditions that violate
          Chinese labour laws. “I don’t want to think about what would happen if
          a fire broke out there,” one researcher said. Workers in Guangzhou
          also told the researchers they sewed for 12 hours a day, working about
          75 hours a week, and only received one day off a month. At Shein’s
          packing facility in the city of Foshan, workers also said they worked
          12 to 14-hour days and up to 28 days a month. Chinese labour laws
          state workweeks cannot exceed 40 hours, and overtime cannot exceed 36
          hours per month. Workers must also receive one day off per week.
          Researchers were told many labourers that work for Shein suppliers are
          migrant workers from other provinces. “Many are only in the city for a
          limited time, without their families and with no responsibilities
          other than to earn as much money as possible,” the report said. “One
          of the interviewees states that, in general, the wage per item of
          clothing is considerably lower here than in other places where he had
          worked. However, the quality expectations are not particularly high
          either.” In an email to BoF, Shein said it “takes all supply chain
          matters seriously.” “Upon learning of the report, we immediately
          requested a copy and when we receive and review the report, we will
          initiate an investigation,” Shein said. “We have a strict supplier
          Code of Conduct which includes stringent health and safety policies
          and is in compliance with local laws. If non-compliance is identified
          we will take immediate action.”
        </div>
      </div>
    </>
  );
}

export default Fash;
