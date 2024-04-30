import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { CircularLoader } from 'components/CircularLoader';
import { useEffect, useState } from 'react';
import { getArticles } from 'services/article';
import { useWindowSize } from 'utils';

export const HomeView = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    getArticles()
      .then((data) => {
        console.log('article data => ', data);
        setData(data?.articleList);
      })
      .catch((err) => {
        // setMessage({ show: true, text: API_BASED_ERROR_MESSAGE, type: 'error' });
        console.log('error - get all categories', err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Card variant="outlined" color="primary" sx={{ borderRadius: 5, minHeight: windowHeight - 120 }}>
        <CardContent sx={{ m: 2 }}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary">
                My Articles
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary"></Typography>
            </Grid>
          </Grid>
          <br></br>
          <Divider />
          <br></br>

          <CircularLoader loading={loading}>
            <Grid container spacing={2} direction="row" justifyContent="center">
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Card variant="outlined" color="primary" sx={{ borderRadius: 5, minHeight: windowHeight - 220 }}>
                  <div style={{ margin: '10px' }}>
                    <Grid container spacing={2}>
                      {data.map((d, i) => (
                        <Grid key={i} item xs={4}>
                          <Card variant="outlined" color="primary" sx={{ borderRadius: 2, height: '100%' }}>
                            <CardContent>
                              <Typography variant="h5" textAlign={'center'} m={1}>
                                {d?.title}
                              </Typography>
                              <Typography m={1}>{d?.summary}</Typography>
                              <Typography m={1} textAlign={'justify'}>
                                {d?.details}
                              </Typography>
                              <Typography m={1}>{d.comments}</Typography>
                              <Typography m={1}>{d.publishedDate}</Typography>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </CircularLoader>
        </CardContent>
      </Card>
    </>
  );
};
