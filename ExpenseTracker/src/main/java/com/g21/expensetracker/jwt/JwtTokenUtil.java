package com.g21.expensetracker.jwt;

import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import com.g21.expensetracker.Models.User;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtTokenUtil {
private static final Logger LOGGER = LoggerFactory.getLogger(JwtTokenUtil.class);
	
	private static final long EXPIRE_DURATION=28800*1000;
	
	@Value("${app.jwt.secret}")
	private String secretKey;
	
	public String generateAccesToken(User user) {
		return Jwts.builder()
				.setSubject(user.getId()+","+user.getUsername())
				.claim("roles",user.getRole().toString())
				.setIssuer("G21")
				.setIssuedAt(new Date())
				.setExpiration(new Date(System.currentTimeMillis()+EXPIRE_DURATION))
				.signWith(SignatureAlgorithm.HS512, secretKey)
				.compact();
				
	}
	
	public boolean validateAccesToken(String token) {
		try {
			Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
			
			return true;
			
		}catch(ExpiredJwtException ex) {
			LOGGER.error("JWT expired",ex);
		}catch(IllegalArgumentException ex) {
			LOGGER.error("Token is null, empty or has only whitespace",ex);
		}catch(MalformedJwtException ex) {
			LOGGER.error("JWT is invalid");
		}catch(UnsupportedJwtException ex) {
			LOGGER.error("JWT is not supported",ex);
		}catch(SignatureException ex) {
			LOGGER.error("Signature validation failed",ex);
		}
		
		
		return false;
	}
	
	public String getSubject(String token) {
		return parseClaims(token).getSubject();
	}
	
	public Claims parseClaims(String token) {
		return Jwts.parser()
				.setSigningKey(secretKey)
				.parseClaimsJws(token)
				.getBody();
	}

}
