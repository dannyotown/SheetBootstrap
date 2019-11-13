import React, { Component } from 'react';
import { MDBParallax } from 'mdbreact';
class ParallaxIntro extends Component {
  render() {
    return (
      <>
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Others/img%20%2844%29.jpg'
          // top='0px'
          speed={0.8}
          containterHeight='100px'
          waves
          // insideStatic={true}
        >
          {/* <div className='mask rgba-blue-slight' style={{ height: '100%' }}>
            <div className='container flex-center text-center'>
              <div className='row mt-5'>
                <div className='col-md-12 col-xl-8 mx-auto wow fadeIn'>
                  <h1
                    className='display-3 font-weight-bold mb-2 wow fadeInDown'
                    data-wow-delay='0.3s'
                  >
                    MDBParallax image with a mask and a content
                  </h1>
                </div>
              </div>
            </div>
          </div> */}
        </MDBParallax>

        <div className='container' style={{ backgroundColor: '#ffffffaa' }}>
          <div className='row my-5 py-4'>
            <div className='col-md-12 text-center'>
              <p align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>

              <p className='mb-0' align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>
            </div>
          </div>
        </div>

        <MDBParallax
          image='http://mdbootstrap.com/img/Photos/Others/nature4.jpg'
          // top='0px'
          speed={0.5}
          containterHeight='50vh'
        />

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='h1 font-weight-bold indigo-text my-5 py-4'>
                Different MDBParallax speed
              </h2>
            </div>
          </div>
        </div>
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Others/city13.jpg'
          // top='0px'
          speed={0.8}
          containterHeight='50vh'
        />
        <MDBParallax
          image='https://mdbootstrap.com/img/Photos/Others/images/92.jpg'
          // top='0px'
          speed={-0.8}
          containterHeight='50vh'
        />
        <MDBParallax
          image='https://bitbucket.org/startupflow/img/raw/a02ba123f067cbfdd1b6b0d632d71bca9f0e0f52/Photos/Horizontal/Relax/full%20page/spa.jpg'
          // top='0px'
          speed={-1.1}
          containterHeight='50vh'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='h1 font-weight-bold pink-text my-5 py-4'>
                MDBParallax &lt;img&gt; tag
              </h2>
            </div>
          </div>
        </div>

        <div className='grey lighten-4'>
          <div className='container pt-5'>
            <p align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className='float-md-left mr-md-4 mb-4 mb-md-0'>
              <MDBParallax
                image='https://images.unsplash.com/photo-1571730125465-0ca1959336ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2105&q=80'
                // top='0px'
                // zIndex='1'
                speed={0.2}
                containterHeight='200px'
                // containerWidth='200px'
              />
            </div>

            <p align='justify'>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur?
            </p>

            <p align='justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              dolor in reprehenderit amet.
            </p>

            <div className='float-md-right ml-md-4 mb-4 mb-md-0'>
              <MDBParallax
                image='https://images.unsplash.com/photo-1571730125465-0ca1959336ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2105&q=80'
                // top='0px'
                // zIndex='1'
                speed={-0.2}
                containterHeight='200px'
                // containerWidth='200px'
              />
            </div>

            <p className='mb-0 pb-5' align='justify'>
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti atque corrupti quos
              dolores et quas molestias excepturi sint occaecati cupiditate non
              provident, similique sunt in culpa qui officia deserunt mollitia
              animi, id est laborum et dolorum fuga. Et harum quidem rerum
              facilis est et expedita distinctio. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit quo minus id quod
              maxime placeat facere possimus, omnis voluptas assumenda est,
              omnis dolor repellendus. Temporibus autem quibusdam et aut
              officiis debitis aut rerum necessitatibus saepe eveniet ut et
              voluptates repudiandae sint et molestiae non recusandae. Itaque
              earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
              voluptatibus maiores alias consequatur aut perferendis doloribus
              asperiores repellat. Quidem rerum facilis est et expedita
              distinctio. Nam libero tempore, cum soluta nobis est eligendi
              optio cumque nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor repellendus.
              Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et
              molestiae. Agni dolores eos qui ratione voluptatem sequi nesciunt.
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              quibusdam et voluptate velit esse quam nihil ex minus id quod.
            </p>
          </div>
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-md-12 text-center'>
              <h2 className='h1 font-weight-bold cyan-text my-5 py-4'>
                Youtube Vimeo and &lt;video&gt; MDBParallax
              </h2>
            </div>
          </div>
        </div>

        {/* <div
          className='jarallax'
          data-video-src='https://youtu.be/lugard7P0nw'
        ></div>
        <div
          className='jarallax'
          data-speed='0'
          data-video-src='mp4:video/animation-intro.mp4'
        >
          <img className='jarallax-img' src='' alt='' />
        </div>
        <div
          className='jarallax'
          data-speed='1.2'
          data-video-src='https://player.vimeo.com/video/137857207'
        ></div> */}

        <div className='container'>
          <div className='row my-5 py-4'>
            <div className='col-md-12 text-center'>
              <p align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>
              <p className='mb-0' align='justify'>
                Lorem ipsum dolor sit amet, consectetur quis elit. Perspiciatis
                commodi porro, cumque provident rem corporis odit, ut quas
                dolores maxime nesciunt possimus quis, soluta velit debitis
                amet, veritatis cupiditate reprehenderit.Lorem ipsum dolor sit
                amet, consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime nesciunt
                possimus quis, soluta velit debitis amet, veritatis cupiditate
                reprehenderit.Lorem ipsum dolor sit amet, consectetur quis elit.
                Perspiciatis commodi porro, cumque provident rem corporis odit,
                ut quas dolores maxime nesciunt possimus quis, soluta velit
                debitis amet, veritatis cupiditate reprehenderit.Lorem ipsum
                dolor sit amet, consectetur quis elit. Perspiciatis commodi
                porro, cumque provident rem corporis odit, ut quas dolores
                maxime nesciunt possimus quis, soluta velit debitis amet,
                veritatis cupiditate reprehenderit.Lorem ipsum dolor sit amet,
                consectetur quis elit. Perspiciatis commodi porro, cumque
                provident rem corporis odit, ut quas dolores maxime.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ParallaxIntro;
