import React from 'react';
import styles from './patientPage.module.css'

const PatientPage = () => {
    const patients = [
        {
            id: 1,
            fullName: 'Jane Doe',
            email: 'jane.doe@example.com',
            cellNumber: '555-555-5555'
        },
        {
            id: 2,
            fullName: 'John Smith',
            email: 'john.smith@example.com',
            cellNumber: '555-555-5556'
        },
        {
            id: 3,
            fullName: 'Bob Johnson',
            email: 'bob.johnson@example.com',
            cellNumber: '555-555-5557'
        }
    ];

    return (
        <div className={styles.patientsPage}>
            <h1 className={styles.pageTitle}>Patients</h1>
            <table className={styles.table}>
                <thead>
                <tr>
                    <th className={styles.th_style}>Full Name</th>
                    <th className={styles.th_style}>Email</th>
                    <th className={styles.th_style}>Cell Number</th>
                </tr>
                </thead>
                <tbody>
                {patients.map(patient => (
                    <tr key={patient.id}>
                        <td className={styles.th_td_style}>{patient.fullName}</td>
                        <td className={styles.th_td_style}>{patient.email}</td>
                        <td className={styles.th_td_style}>{patient.cellNumber}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PatientPage;