using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using API_FastFood.Data;
using API_FastFood.Models;

namespace API_FastFood.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComboesController : ControllerBase
    {
        private readonly API_FastFoodContext _context;

        public ComboesController(API_FastFoodContext context)
        {
            _context = context;
        }

        // GET: api/Comboes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Combo>>> GetCombo()
        {
            return await _context.Combos.ToListAsync();
        }

        // GET: api/Invoices/page=?
        [HttpGet("page")]

        public async Task<ActionResult<IEnumerable<Combo>>> GetComboPage(int page)
        {
            const int pageSize = 5;
            if (_context.Combos == null)
            {
                return NotFound();
            }

            return await _context.Combos
                                 .Skip((page - 1) * pageSize)
                                 .Take(pageSize)
                                 .ToListAsync();
        }

        // GET: api/Comboes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Combo>> GetCombo(int id)
        {
            var combo = await _context.Combos.FindAsync(id);

            if (combo == null)
            {
                return NotFound();
            }

            return combo;
        }

        // PUT: api/Comboes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCombo(int id, Combo combo)
        {
            if (id != combo.Id)
            {
                return BadRequest();
            }

            _context.Entry(combo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ComboExists(id))
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

        // POST: api/Comboes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Combo>> PostCombo(Combo combo)
        {
            _context.Combos.Add(combo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCombo", new { id = combo.Id }, combo);
        }

        // DELETE: api/Comboes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCombo(int id)
        {
            var combo = await _context.Combos.FindAsync(id);
            if (combo == null)
            {
                return NotFound();
            }

            _context.Combos.Remove(combo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ComboExists(int id)
        {
            return _context.Combos.Any(e => e.Id == id);
        }
    }
}
