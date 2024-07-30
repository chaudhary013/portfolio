import React from 'react';
import { Typography, Card, CardContent, Divider, Grid } from '@mui/material';
import { useSpring, animated } from 'react-spring';

// Education data
const education = [
  {
    date: 'August 2021 - Present',
    institution: 'Lovely Professional University',
    degree: 'B.Tech CSE - CGPA: 6.8',
    location: 'Punjab, India'
  },
  {
    date: 'April 2018 - March 2020',
    institution: 'Sant Atulanand Convent School',
    degree: 'Intermediate - Percentage: 67%',
    location: 'Uttar Pradesh, India'
  },
  {
    date: 'April 2016 - March 2018',
    institution: 'Sant Atulanand Convent School',
    degree: 'Matriculation - Percentage: 85%',
    location: 'Uttar Pradesh, India'
  }
];

const Education = () => {
  // Animation for the card appearance
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { mass: 1, tension: 280, friction: 60 },
  });

  return (
    <div style={{ padding: '50px 0', backgroundColor: '#f0f4f8' }}>
      <Typography variant="h4" gutterBottom align="center" style={{ color: '#3f51b5' }}>
        Education
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {education.map((edu, index) => (
          <Grid item xs={12} md={6} lg={4} key={index}>
            <animated.div style={fadeIn}>
              <Card variant="outlined" style={{ borderColor: '#3f51b5', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <CardContent>
                  <Typography variant="h6" component="div" style={{ color: '#3f51b5' }}>
                    {edu.institution}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {edu.degree}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {edu.location}
                  </Typography>
                  <Divider style={{ margin: '10px 0', backgroundColor: '#3f51b5' }} />
                  <Typography variant="body2" color="textSecondary">
                    {edu.date}
                  </Typography>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Education;
