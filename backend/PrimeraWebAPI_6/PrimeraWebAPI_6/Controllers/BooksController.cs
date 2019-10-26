using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PrimeraWebAPI_6.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace PrimeraWebAPI_6.Controllers
{
    [Route("api/[controller]")]  // api/books
    [ApiController]
    public class BooksController : Controller
    {
        List<Book> books = new List<Book>()
      {
         new Book { id = 1 , author = "M. Douglas", title = "Trading", price = 40 },
         new Book { id = 2 , author = "Anónimo", title = "Un libro", price = 70},
         new Book { id = 3 , author = "Peter", title = "Before fall", price = 78},
         new Book { id = 4 , author = "Emma Cline", title = "The Martian", price =45},
      };

        // TODOS LOS LIBROS
        //[HttpGet]
        [HttpGet("/devolverLidros")]
        public ActionResult<IEnumerable<Book>> Get()
        {
            return Ok(books);
        }

        // LIBRO POR ID
        [HttpGet("{id}")]   //  api/books/4
        public ActionResult<Book> GetById(int id)
        {
            /*
            Book libro = new Book();
            for (int i = 0; i < books.Count; i++)
            {
               if (books[i].id == id)
               {
                  libro = books[i];
                  break;
               }
            }
            return libro;
            */

            var miLibro = books.Where(x => x.id == id).FirstOrDefault();
            if (miLibro == null)
                return BadRequest();
            else
                return Ok(miLibro);

            // si no hay este registro
            // return BadRequest();

        }
        // LIBRO POR nombr      ||e
        [HttpGet("titulo/{title}")]   //  api/books/4
        public ActionResult<Book> GetByName(string title)
        {
          

            var miLibro = books.Where(x => x.title == title).FirstOrDefault();
            if (miLibro == null)
                return BadRequest();
            else
                return Ok(miLibro);

            // si no hay este registro
            // return BadRequest();

        }
        [HttpGet]   //  api/books/4
        public ActionResult<Book> GetByPrice(double price)
        {


            var miLibro = books.Where(x => x.price == price).FirstOrDefault();
            if (miLibro == null)
                return BadRequest();
            else
                return Ok(miLibro);

            // si no hay este registro
            // return BadRequest();

        }
        [HttpPost]
        public ActionResult AddBook([FromBody] Book libro)
        {
            libro.id = books.Count + 1;
            books.Add(libro);
            return Ok(books);
        }
        [HttpPut]
        public ActionResult ModifyBook([FromBody] Book libro)
        {
            //books.Add(libro);
            libro = books.Where(x => x.id == libro.id).FirstOrDefault(); ;
            libro.title = libro.title;
            return Ok(books);
        }

    }
}
