﻿using System;
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
    public class PromotionDetailsController : ControllerBase
    {
        private readonly API_FastFoodContext _context;

        public PromotionDetailsController(API_FastFoodContext context)
        {
            _context = context;
        }

        // GET: api/PromotionDetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PromotionDetail>>> GetPromotionDetail()
        {
            return await _context.PromotionDetails.ToListAsync();
        }

        // GET: api/PromotionDetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PromotionDetail>> GetPromotionDetail(int id)
        {
            var promotionDetail = await _context.PromotionDetails.FindAsync(id);

            if (promotionDetail == null)
            {
                return NotFound();
            }

            return promotionDetail;
        }

        // PUT: api/PromotionDetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPromotionDetail(int id, PromotionDetail promotionDetail)
        {
            if (id != promotionDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(promotionDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PromotionDetailExists(id))
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

        // POST: api/PromotionDetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PromotionDetail>> PostPromotionDetail(PromotionDetail promotionDetail)
        {
            _context.PromotionDetails.Add(promotionDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPromotionDetail", new { id = promotionDetail.Id }, promotionDetail);
        }

        // DELETE: api/PromotionDetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePromotionDetail(int id)
        {
            var promotionDetail = await _context.PromotionDetails.FindAsync(id);
            if (promotionDetail == null)
            {
                return NotFound();
            }

            _context.PromotionDetails.Remove(promotionDetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PromotionDetailExists(int id)
        {
            return _context.PromotionDetails.Any(e => e.Id == id);
        }
    }
}
