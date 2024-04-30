import { Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { CircularLoader } from 'components/CircularLoader';
import { useState } from 'react';
import { useWindowSize } from 'utils';

export const ViewArticles = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Card variant="outlined" color="primary" sx={{ borderRadius: 5, height: windowHeight - 120 }}>
        <CardContent sx={{ m: 2 }}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary">
                Publish Article
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
              <Grid item xs={12} md={12} lg={8} xl={6}>
                <Card variant="outlined" color="primary" sx={{ borderRadius: 5 }}>
                  <div style={{ height: windowHeight - 250, overflowY: 'auto' }}>
                    {/* <Stack spacing={5} mt={5} pb={10} direction="column" justifyContent="center" alignItems="center">
                      <Stack spacing={2} sx={{ width: '50%' }} direction="column" justifyContent="center" alignItems="center">
                        <InputField control={hookForm.control} label="Title" name="title" id="title" fullWidth />

                        <InputField control={hookForm.control} label="Summary" name="summary" id="summary" fullWidth />

                        <InputField control={hookForm.control} label="Details" name="details" id="details" fullWidth />

                        <InputField control={hookForm.control} label="Comments" name="comments" id="comments" fullWidth />

                        <AlertMessage
                          sx={{ mt: 3 }}
                          show={message.show}
                          message={message.text}
                          type={message.type}
                          // onClose={() => setMessage({ show: false, text: null, type: null })}
                        />

                        <Stack spacing={2} direction={'row'}>
                          <Button variant="contained" 
                          // onClick={() => hookForm.handleSubmit(onSubmit, onError)()}
                          >
                            Publish
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack> */}
                  </div>
                </Card>
              </Grid>
            </Grid>
          </CircularLoader>
        </CardContent>
      </Card>
    </>
  )
}
