
export default ({ props }) => (
  <pre style={{
    background: '#eee',
    color: '#555',
    maxWidth: '500px',
    fontWeight: 'bold',
    padding: '20px',
    border: '1px dashed #F00',
    fontFamily: 'monospace',
    fontSize: '14px'
  }}>
    { JSON.stringify(props, null, 2)}
  </pre>
)