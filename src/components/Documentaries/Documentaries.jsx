import './../../App.css'
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Badge from 'react-bootstrap/Badge';

function Documentaries({ documentaries }) {
  return (
    <div className='Popular-planes'>
      <h3 style={{ margin: '2vh' }}>Featured Creators</h3>

      <Stack direction='horizontal' gap={3} style={{ flexWrap: 'wrap' }}>
        {documentaries.map((documentary, index) => (
          <Card
            key={documentary.name || index}
            style={{
              width: '10rem',
              minHeight: '30vh',
              minWidth: '35vh',
              margin: '4vh',
              backgroundColor: '#ffffff',
              color: 'var(--text-primary)',
              fontFamily: 'system-ui',
              maxHeight: '50vh',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
            }}
          >
            <Card.Img
              style={{ maxWidth: '100%', maxHeight: '30vh' }}
              variant='top'
              src={documentary.thumbnail}
            />

            <Card.Body>
              <Card.Title style={{ padding: '8px' }}>{documentary.name}</Card.Title>
              <Card.Text style={{ padding: '8px', textOverflow: 'ellipsis' }}>
                {documentary.description}
              </Card.Text>

              <Stack direction='horizontal' gap={2} style={{marginRight:'4vh'}}>
                {(documentary.badges || []).map((badge, badgeIndex) => (
                  <Badge key={`${documentary.name}-${badge}-${badgeIndex}`} bg='warning' text='dark'>
                    {badge}
                  </Badge>
                ))}
              </Stack>
            </Card.Body>
          </Card>
        ))}
      </Stack>
    </div>
  );
}

export default Documentaries;