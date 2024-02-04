using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_FastFood.Data;
using API_FastFood.Models;
using Microsoft.Extensions.Hosting;

namespace API_FastFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SlideshowsController : ControllerBase
    {
        private readonly API_FastFoodContext _context;
        private IWebHostEnvironment _environment;

        public SlideshowsController(API_FastFoodContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        // GET: api/Slideshows
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Slideshow>>> GetSlideshow()
        {
            return await _context.Slideshows.ToListAsync();
        }

        // GET: api/Slideshow/page=?
        [HttpGet("page")]

        public async Task<ActionResult<IEnumerable<Slideshow>>> GetSlideshowPage(int page)
        {
            const int pageSize = 6;
            if (_context.Slideshows == null)
            {
                return NotFound();
            }

            return await _context.Slideshows.Skip((page - 1) * pageSize)
                                        .Take(pageSize)
                                        .ToListAsync();
        }

        // GET: api/Slideshows/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Slideshow>> GetSlideshow(int id)
        {
            var slideshow = await _context.Slideshows.FindAsync(id);

            if (slideshow == null)
            {
                return NotFound();
            }

            return slideshow;
        }

        // PUT: api/Slideshows/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutSlideshow(int id, Slideshow slideshow)
        {
            if (id != slideshow.Id)
            {
                return BadRequest();
            }

            _context.Entry(slideshow).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SlideshowExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Slideshows
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Slideshow>> PostSlideshow([FromForm] Slideshow slideshow)
        {
            if (_context.Slideshows == null)
            {
                return Problem("Entity set 'API_FastFoodContext.Product'  is null.");
            }

            _context.Slideshows.Add(slideshow);
            await _context.SaveChangesAsync();
            if (slideshow.ImageFile != null)
            {
                var extension = Path.GetExtension(slideshow.ImageFile.FileName);
                string[] allow = { ".jpg", ".png", ".gif" };
                if (!allow.Contains(extension))
                {
                    return BadRequest();
                }

                var fileName = slideshow.Id.ToString() + Path.GetExtension(slideshow.ImageFile.FileName);
                var uploadFolder = Path.Combine(_environment.WebRootPath, "images", "slideshow");
                var uploadPath = Path.Combine(uploadFolder, fileName);

                using (FileStream fs = System.IO.File.Create(uploadPath))
                {
                    slideshow.ImageFile.CopyTo(fs);
                    fs.Flush();
                }
                slideshow.Image = fileName;
                //product.Image = product.Id.ToString() + Path.GetExtension(product.ImageFile.FileName);
                //Kiem tra du lieu

                if (!slideshow.ImageFile.ContentType.StartsWith("image"))
                {

                    return NoContent();
                }
                if (slideshow.ImageFile.Length > 5 * 1024 * 1024)
                {

                }
                _context.Slideshows.Update(slideshow);
                await _context.SaveChangesAsync();
            }
            _context.Update(slideshow);

            return CreatedAtAction("GetSlideshow", new { id = slideshow.Id }, slideshow);
        }


        // DELETE: api/Slideshows/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSlideshow(int id)
        {
            var slideshow = await _context.Slideshows.FindAsync(id);
            if (slideshow == null)
            {
                return NotFound();
            }

            _context.Slideshows.Remove(slideshow);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SlideshowExists(int id)
        {
            return _context.Slideshows.Any(e => e.Id == id);
        }
    }
}
