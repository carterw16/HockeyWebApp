import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import useAxios from '../../data/useaxios';
import TeamLogo from './teamlogo';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function TeamGrid() {
    const {data, error, loading} = useAxios("teams")
    console.log(data, error, loading)
    if (loading) {
        return "loading"
    }
    if (error) {
        return "error"
    }
    const teams = data.teams
    const divisions = ["Metro", "CEN", "PAC", "ATL"]
    const divToTeams = {}
    teams.forEach(team => {
        const div = team.division.nameShort
        if (!(div in divToTeams)){
            divToTeams[div] = []
        }
        divToTeams[div].push(team)
    })
    console.log(divToTeams)
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {divisions.map(nameShort => 
                    <Grid item xs={3} key={nameShort}>
                        <Item>
                            <div style={{fontWeight: "bold"}}>{nameShort}</div>
                            {divToTeams[nameShort].map(team =>
                                <div key={team.id}>
                                    <TeamLogo teamid={team.id} height="20px"/>
                                    {team.name}
                                </div>
                            )}
                        </Item>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
}
