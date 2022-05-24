<div class="form">
    <section class="mb-4">

    
    <h2 class="h1-responsive font-weight-bold text-center my-4">Contactanos</h2>
    
    <p class="text-center w-responsive mx-auto mb-5">Tienes alguna duda, llena este formulario y cuentanos que pasa.</p>

    <div class="row">

        <!--Grid column-->
        <div class="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                
                <div class="row">

                    
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="name" name="name" class="form-control">
                            <label for="name" class="">Tu Nombre</label>
                        </div>
                    </div>
                    <!--Grid column-->

                    <!--Grid column-->
                    <div class="col-md-6">
                        <div class="md-form mb-0">
                            <input type="text" id="email" name="email" class="form-control">
                            <label for="email" class="">Tu email</label>
                        </div>
                    </div>
                    

                </div>
                

                
                <div class="row">
                    <div class="col-md-12">
                        <div class="md-form mb-0">
                            <input type="text" id="subject" name="subject" class="form-control">
                            <label for="subject" class="">Tema</label>
                        </div>
                    </div>
                </div>
                

                
                <div class="row">

                   
                    <div class="col-md-12">

                        <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                            <label for="message">Tu Comentario</label>
                        </div>

                    </div>
                </div>
                

            </form>

            <div class="text-center text-md-left">
                <a class="btn btn-primary">Send</a>
            </div>
            <div class="status"></div>
        </div>
    </div>
<div class="row">
   <div class="col-md-5 text-center">
            <ul class="list-unstyled mb-0">
                <li><i class="fas fa-map-marker-alt fa-2x"></i>
                    <p>SOMEWHERE </p>
                </li>

                <li><i class="fas fa-phone mt-4 fa-2x"></i>
                    <p>+ 54 234 567 89</p>
                </li>

                <li><i class="fas fa-envelope mt-4 fa-2x"></i>
                    <p>PCPMEX@contactbruh.com</p>
                </li>
            </ul>
        
</div>
</section>
</div>

<style lang="scss">
    .form{
        display: flex;
        justify-content: center;
    }

    .row{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    
</style>