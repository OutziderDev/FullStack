import FemaleIcon from '@mui/icons-material/Female';
import patientsService from '../../services/patients';
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import { useEffect, useState } from 'react';
import { Patient } from '../../types';

const ViewPatientData = () => {
  const {id} = useParams();
  const [patient,setPatient] = useState<Patient | undefined>();

  useEffect( () => {
    const fetchPatientById = async () => {
      if (id) {
        try {
          const data = await patientsService.findPatientById(id);
          setPatient(data);
        } catch (error) {
          alert('error');
        }  
      }
    };
    fetchPatientById();
  },[id]);
  
  return (
    <>
      <Typography variant="h2" style={{ marginTop: "0.5em", fontWeight: "bold" }}>
        {patient?.name} 
        <FemaleIcon sx={{fontSize: 60, alignItems:'center'}} color='error'/>
      </Typography>

      <div>
        <span>Ssh:</span> <span>{patient?.ssn}</span>
      </div>

      <div>
        <span>Ocupation:</span> <span>{patient?.occupation}</span>
      </div>
    </>
  );

};

export default ViewPatientData;