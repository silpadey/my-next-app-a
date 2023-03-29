import Link from 'next/link'
import { useState } from "react"
import { Container } from 'react-bootstrap'

export default function HomePage() {
	return (
		<Container>
			<div className="cover">
				<p className="display-4">My First Next App</p>
				<p className="lead">This is a movie details app</p>
				<p className="lead">Silpa Dey</p>
				<Link href={'/allmovies'} className="btn">View Movies</Link>
			</div>
		</Container>
	)
}
