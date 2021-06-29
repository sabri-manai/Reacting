import React from 'react'
import {Media} from 'react-bootstrap'
const Layout = () => {
    return (
        <div className='MyLayout'>
            <ul className="list-unstyled">
  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNqY2MFAtnKRSRLCsUND32A4SVHeZ_5P_m9A&usqp=CAU"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="https://64x64-pixel-image.thickkare.pw/img/64x64-pixel-image-2.gif"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="data:image/png;base64,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"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>
</ul>
        </div>
    )
}

export default Layout
