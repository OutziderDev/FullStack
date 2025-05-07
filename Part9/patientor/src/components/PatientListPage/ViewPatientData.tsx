import patientsService from '../../services/patients';
import { useParams } from "react-router-dom";
import { Typography, Divider } from "@mui/material";
import { useEffect, useState } from 'react';
import { Patients } from '../../types';
import {genderIcon} from '../../utils/genderIcon';

const ViewPatientData = () => {
  const {id} = useParams();
  const [patient,setPatient] = useState<Patients | undefined>();
  console.log(patient);
  
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

  const genderIcono = genderIcon(patient?.gender);

  return (
    <>
      <div style={{marginBottom:'15px'}}>
        <Typography variant="h2" style={{ marginTop: "0.5em", fontWeight: "bold" }}>
          {patient?.name}
          {genderIcono}
        </Typography>
        <div >
          <span style={{fontWeight:'bold',fontSize:'1.5rem'}}>Ssh:</span> <span>{patient?.ssn}</span>
        </div>
        <div>
          <span style={{fontWeight:'bold',fontSize:'1.5rem'}}>Ocupation:</span> <span>{patient?.occupation}</span>
        </div>
      </div>
      <Divider/>
      <h2 style={{fontWeight:'bold', fontSize:40, marginBottom:12}}>Entries</h2>
      {/* card details */}
      {
        patient?.entries.map( entry => (
          <div style={{
            display:'flex',
            marginTop:9,
            flexDirection:'column',
            border:'2px  solid #703126',
            padding:10,
            borderRadius:10,
            backgroundColor:'#BE513D',
            color:'#fff',
            fontSize:30,
            fontWeight:'bold'
          }}>
            <h4 style={{margin:0}}>{entry.date}</h4>
            <p>{entry.description}</p>

            <div>
              <span>Diagnosis codes:</span>
              <ul style={{margin:10 }}>
                {entry.diagnosisCodes?.map((code) => (
                  <li style={{marginTop:5}}>{code}</li>
                ))}
              </ul>
            </div>
          </div>
        ))
      }
      
    </>
  );

};

export default ViewPatientData;