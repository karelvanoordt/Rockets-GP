
export default function Mission(mission) {
    return (
        <tr key={mission.mission.mission_id}>
            <td>{mission.mission.title}</td>
            <td className="m_d">{mission.mission.description}</td>
            <td>
                <label className='status' style={{ textTransform: 'uppercase' }}>Not a member</label>
            </td>
            <td>
                <button className='state'>Join Mission</button>
            </td>
        </tr>
    )
}