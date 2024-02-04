using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_FastFood.Data;
using API_FastFood.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc.Rendering;
using System.IO;
using Microsoft.Extensions.Hosting;
using Microsoft.CodeAnalysis;

namespace API_FastFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly API_FastFoodContext _context;
        private IWebHostEnvironment _environment;

        public static int PAGE_SIZE { get; set; } = 5;

        public ProductsController(API_FastFoodContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        // GET: api/Products
        [HttpGet]

        public async Task<ActionResult<IEnumerable<Product>>> GetProduct()
        {
            return await _context.Products.Include(p => p.ProductType)
                                        .ToListAsync();
        }

        //Get: api/Products/ProductType
        //Tim san pham theo loai san pham(producttype)
        [HttpGet("OfProductType")]
        public async Task<ActionResult<IEnumerable<Product>>> GetProductBy(int productTypeId)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.ProductTypeId == productTypeId).ToListAsync();
        }

        // GET: api/Products/page=?
        [HttpGet("page")]

        public async Task<ActionResult<IEnumerable<Product>>> GetProductPage(int page)
        {
            const int pageSize = 5;
            if (_context.Products == null)
            {
                return NotFound();
            }

            return await _context.Products
                                 .Include(p => p.ProductType)
                                 .Skip((page - 1) * pageSize)
                                 .Take(pageSize)
                                 .ToListAsync();
        }

        [HttpGet("searchname")]
        public async Task<ActionResult<IEnumerable<Product>>> GetUserByName(string search)
        {
            var allProducts = _context.Products.Include(p => p.ProductType).AsQueryable();


            if (!string.IsNullOrEmpty(search))
            {
                allProducts = allProducts.Where(p => p.Name.Contains(search));
            }

            var result = allProducts.Select(p => new Product
            {
                Id = p.Id,
                Name = p.Name,
                Image = p.Image,
                Price = p.Price,
                Description = p.Description,
                ProductType = p.ProductType,
                AverageStar = p.AverageStar,
                Status = p.Status,

            });

            return result.ToList();

        }

        [HttpGet("pricesort")]
        public async Task<ActionResult<IEnumerable<Product>>> ProductPriceSort()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.OrderBy(p => p.Price).ToListAsync();
        }

        [HttpGet("pricesortdesc")]

        public async Task<ActionResult<IEnumerable<Product>>> ProductPriceSortDesc()
        {
            if (_context.Products == null)
            {
                return NotFound();
            }

            return await _context.Products.OrderByDescending(p => p.Price).ToListAsync();
        }




        [HttpGet("searchfilter")]

        public async Task<ActionResult<IEnumerable<Product>>> GetProductSearchFilter(string search, double? from, double? to, string sortBy, int page = 1)
        {
            var allProducts = _context.Products.Include(p => p.ProductType).AsQueryable();

            #region Filtering
            if (!string.IsNullOrEmpty(search))
            {
                allProducts = allProducts.Where(p => p.Name.Contains(search));
            }
            if (from.HasValue)
            {
                allProducts = allProducts.Where(p => p.Price >= from);
            }
            if (to.HasValue)
            {
                allProducts = allProducts.Where(p => p.Price <= to);
            }
            #endregion

            #region Sorting
            // Default sort by id
            allProducts = allProducts.OrderBy(p => p.Id);

            if (!string.IsNullOrEmpty(sortBy))
            {
                switch (sortBy)
                {
                    case "name_desc":
                        allProducts = allProducts.OrderByDescending(p => p.Name);
                        break;
                    case "price_desc":
                        allProducts = allProducts.OrderByDescending(p => p.Price);
                        break;
                    case "price_asc":
                        allProducts = allProducts.OrderBy(p => p.Price);
                        break;
                    case "producttype_name_asc":
                        allProducts = allProducts.OrderBy(p => p.ProductType.Name);
                        break;
                }
            }

            #endregion

            #region Paging
            allProducts = allProducts.Skip((page - 1) * PAGE_SIZE)
                                    .Take(PAGE_SIZE);

            #endregion

            var result = allProducts.Select(p => new Product
            {
                Id = p.Id,
                Name = p.Name,
                Image = p.Image,
                Price = p.Price,
                Description = p.Description,
                ProductTypeId = p.ProductTypeId,
                ProductType = p.ProductType,
                AverageStar = p.AverageStar,
                Status = p.Status,

            });

            return result.ToList();

        }

        // GET: api/Products/lowerprice 
        // Loc san pham theo gia tien(thap hon)
        [HttpGet("lowerprice")]
        public async Task<ActionResult<IEnumerable<Product>>> TakeProductLowerPrice(int price)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.Price <= price).ToListAsync();
        }

        // GET: api/Products/uppererprice 
        // Loc san pham theo gia tien(cao hon)
        [HttpGet("upperprice")]
        public async Task<ActionResult<IEnumerable<Product>>> TakeProductUpperPrice(int price)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }
            return await _context.Products.Where(p => p.Price >= price).ToListAsync();
        }

        // GET: api/Products/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> GetProduct(int id)
        {
            if (_context.Products == null)
            {
                return NotFound();
            }

            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            return product;
        }

        // PUT: api/Products/5
        //  To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct([FromForm] Product product, int id)
        {
            if (id != product.Id)
            {
                return BadRequest();
            }

            _context.Entry(product).State = EntityState.Modified;

            try
            {
                _context.Products.Update(product);
                await _context.SaveChangesAsync();

            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            //return NoContent();
            return AcceptedAtAction("GetProduct", new { id = product.Id }, product);
        }


        // POST: api/Products
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]

        public async Task<ActionResult<Product>> PostProduct([FromForm] Product product)
        {

            if (_context.Products == null)
            {
                return Problem("Entity set 'API_FastFoodContext.Product'  is null.");
            }

            _context.Products.Add(product);
            await _context.SaveChangesAsync();
            if (product.ImageFile != null)
            {
                var extension = Path.GetExtension(product.ImageFile.FileName);
                string[] allow = { ".jpg", ".png", ".gif" };
                if (!allow.Contains(extension))
                {
                    return BadRequest();
                }


                var fileName = product.Id.ToString() + Path.GetExtension(product.ImageFile.FileName);
                var uploadFolder = Path.Combine(_environment.WebRootPath, "images", "product");
                var uploadPath = Path.Combine(uploadFolder, fileName);
                //var uploadPath = Path.Combine(Path.Combine(_environment.WebRootPath, "images", "product")
                //   ,product.Id.ToString() + Path.GetExtension(product.ImageFile.FileName)
                //  );
                using (FileStream fs = System.IO.File.Create(uploadPath))
                {
                    product.ImageFile.CopyTo(fs);
                    fs.Flush();
                }
                product.Image = fileName;
                //product.Image = product.Id.ToString() + Path.GetExtension(product.ImageFile.FileName);
                //Kiem tra du lieu

                if (!product.ImageFile.ContentType.StartsWith("image"))
                {

                    return NoContent();
                }
                if (product.ImageFile.Length > 5 * 1024 * 1024)
                {

                }
                _context.Products.Update(product);
                await _context.SaveChangesAsync();
            }
            _context.Update(product);

            return CreatedAtAction("GetProduct", new { id = product.Id }, product);
        }

        [HttpPost]
        [Route("productaddfile")]
        public async Task<IActionResult> PostWithImageAsyns([FromForm] ProductImage p)
        {
            var findP = _context.Products.Find(p.Id);
            if (findP != null)
            {
                return Ok("Mã sản phẩm này dã có rồi");
            }
            else
            {
                var product = new Product
                {
                    Id = p.Id,
                    ProductTypeId = p.ProductTypeId,
                    Name = p.Name,
                    Price = p.Price,
                    Description = p.Description,
                    AverageStar = p.AverageStar,
                    Status = p.Status,

                };
                // xử lý ảnh
                if (p.Image.Length > 0)
                {
                    var path = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", p.Image.FileName);
                    using (var stream = System.IO.File.Create(path))
                    {
                        await p.Image.CopyToAsync(stream);
                    }

                    product.Image = "/images/" + p.Image.FileName;
                }
                else
                {
                    product.Image = "";
                }

                _context.Products.Add(product);
                _context.SaveChanges();
                return Ok(product);
            }
        }



        // DELETE: api/Products/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = await _context.Products.FindAsync(id);
            if (product == null)
            {
                return NotFound();
            }

            _context.Products.Remove(product);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.Products.Any(e => e.Id == id);
        }
    }
}
